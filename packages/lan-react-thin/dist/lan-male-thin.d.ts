import React from 'react';

export interface LanMaleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMaleThin(props: LanMaleThinProps): React.ReactElement;
export default LanMaleThin;
