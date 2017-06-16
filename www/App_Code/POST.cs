using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Text;
using Newtonsoft.Json.Linq;
/// <summary>
/// Opis podsumowujący dla Class1
/// </summary>
public static class POST
{
    private static string password = "OstryZBaraninaNaC13nk1m!";
    private static string responseString = "";
    private static string zwrot = "";
    public static bool autoryzowany = false;
    public static string getUser(string parametr, string username, string userPassword)
    {
        using (var client = new WebClient())
        {
            
            var values = new System.Collections.Specialized.NameValueCollection();
            values["userPassword"] = userPassword;
            values["function"] = "getUser";
            values["username"] = username;
            

            var response = client.UploadValues("http://kasynobackend-wygoda.rhcloud.com/backend/user", values);
            //przetwarzanie JSONA do użytku obiektowego:
            responseString = Encoding.Default.GetString(response);
            JObject jsonPOST = JObject.Parse(responseString);
            if ((string)jsonPOST["error"] != "")
            {
                zwrot = (string)jsonPOST["error"];
            }
            if ((string)jsonPOST["status"] == "OK")
            {
                String value = (string)jsonPOST["user"] + ",";
                Char delimiter1 = ',';
                String[] substrings = value.Split(delimiter1);
                string id = substrings[0];
                string username_get = substrings[1];
                string balance = substrings[2];

                switch (parametr)
                {
                    case "id":
                        zwrot = id;
                        break;
                    case "username":
                        zwrot = username;
                        break;
                    case "balance":
                        zwrot = balance;
                        break;
                    default:
                        zwrot = "Błąd zapytania";
                        break;
                }

            }
            return zwrot;
        }
        
    }
    public static string Login(string username, string userPassword)
    {
        using (var client = new WebClient())
        {
            var values = new System.Collections.Specialized.NameValueCollection();
            values["userPassword"] = userPassword;
            values["function"] = "authenticate";
            values["username"] = username;
            values["password"] = password;


            var response = client.UploadValues("http://kasynobackend-wygoda.rhcloud.com/backend/user", values);
            //przetwarzanie JSONA do użytku obiektowego:
            responseString = System.Text.Encoding.Default.GetString(response);
            Newtonsoft.Json.Linq.JObject jsonPOST = Newtonsoft.Json.Linq.JObject.Parse(responseString);
            if ((string)jsonPOST["error"] != "")
            {
                zwrot = (string)jsonPOST["error"];
            }
            if ((string)jsonPOST["status"] == "OK")
            {
                autoryzowany = true;
                zwrot = "Logowanie przebiegło pomyślnie.";
            }

        }
        return zwrot;
    }
    public static string Register(string username, string userPassword)
    {
        using (var client = new WebClient())
        {
            var values = new System.Collections.Specialized.NameValueCollection();
            values["password"] = password;
            values["function"] = "register";
            values["username"] = username;
            values["userPassword"] = userPassword;


            var response = client.UploadValues("http://kasynobackend-wygoda.rhcloud.com/backend/user", values);
            //przetwarzanie JSONA do użytku obiektowego:
            responseString = System.Text.Encoding.Default.GetString(response);
            Newtonsoft.Json.Linq.JObject jsonPOST = Newtonsoft.Json.Linq.JObject.Parse(responseString);
            if ((string)jsonPOST["error"] != "")
            {
                zwrot = (string)jsonPOST["error"];
            }
            if ((string)jsonPOST["status"] == "OK")
            {
                autoryzowany = true;
                zwrot = "Rejestracja przebiegła pomyślnie";
            }

        }
        return zwrot;
    }
    public static string delete(string username, string userPassword)
    {
        using (var client = new WebClient())
        {
            var values = new System.Collections.Specialized.NameValueCollection();
            values["userPassword"] = userPassword;
            values["function"] = "delete";
            values["username"] = username;


            var response = client.UploadValues("http://kasynobackend-wygoda.rhcloud.com/backend/user", values);
            //przetwarzanie JSONA do użytku obiektowego:
            responseString = System.Text.Encoding.Default.GetString(response);
            Newtonsoft.Json.Linq.JObject jsonPOST = Newtonsoft.Json.Linq.JObject.Parse(responseString);
            if ((string)jsonPOST["error"] != "")
            {
                zwrot = (string)jsonPOST["error"];
            }
            if ((string)jsonPOST["status"] == "OK")
            {
                zwrot = "Użytkownik usunięty pomyślnie.";
            }

        }
        return zwrot;
    }
    public static string modifyBalance(string username, string nowaKwota, string userPassword)
    {
        using (var client = new WebClient())
        {
            var values = new System.Collections.Specialized.NameValueCollection();
            values["userPassword"] = userPassword;
            values["function"] = "modifyBalance";
            values["username"] = username;
            values["amount"] = nowaKwota;

            var response = client.UploadValues("http://kasynobackend-wygoda.rhcloud.com/backend/user", values);
            //przetwarzanie JSONA do użytku obiektowego:
            responseString = System.Text.Encoding.Default.GetString(response);
            Newtonsoft.Json.Linq.JObject jsonPOST = Newtonsoft.Json.Linq.JObject.Parse(responseString);
            if ((string)jsonPOST["error"] != "")
            {
                zwrot = (string)jsonPOST["error"];
            }
            if ((string)jsonPOST["status"] == "OK")
            {
                zwrot = "Twój stan konta został zmieniony.";
            }

        }
        return zwrot;
    }
}