package app;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Ticket
{

    @Id
    @GeneratedValue ( strategy = GenerationType.AUTO )
    private long id;
    private String message;

    protected Ticket ()
    {
    }

    public Ticket ( String message )
    {
        this.message = message;
    }

    @Override
    public String toString ()
    {
        return "ticket id : " + this.id + " message : " + this.message;
    }
}