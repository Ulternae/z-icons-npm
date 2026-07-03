import React from 'react';

export interface BruUltralyticsHubProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruUltralyticsHub(props: BruUltralyticsHubProps): React.ReactElement;
export default BruUltralyticsHub;
