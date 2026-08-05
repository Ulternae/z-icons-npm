import React from 'react';

export interface LanBedPulseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBedPulseThin(props: LanBedPulseThinProps): React.ReactElement;
export default LanBedPulseThin;
