import React from 'react';

export interface BruUltralyticsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruUltralytics(props: BruUltralyticsProps): React.ReactElement;
export default BruUltralytics;
