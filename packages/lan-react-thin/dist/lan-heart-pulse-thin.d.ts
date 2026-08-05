import React from 'react';

export interface LanHeartPulseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeartPulseThin(props: LanHeartPulseThinProps): React.ReactElement;
export default LanHeartPulseThin;
