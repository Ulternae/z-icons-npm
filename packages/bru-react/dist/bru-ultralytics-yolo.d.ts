import React from 'react';

export interface BruUltralyticsYoloProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruUltralyticsYolo(props: BruUltralyticsYoloProps): React.ReactElement;
export default BruUltralyticsYolo;
