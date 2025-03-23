import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/activities/$activityId/')({
  component: RouteComponent,
});

function RouteComponent() {
  const { activityId } = Route.useParams();
  return <div>Hello "/activities/$activityId/" !{activityId}</div>;
}
