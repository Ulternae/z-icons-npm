import React from 'react';

export interface BruUltralyticsHubProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruUltralyticsHub: React.FC<BruUltralyticsHubProps>;
export default BruUltralyticsHub;
