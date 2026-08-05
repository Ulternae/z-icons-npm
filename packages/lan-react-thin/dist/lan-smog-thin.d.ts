import React from 'react';

export interface LanSmogThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSmogThin(props: LanSmogThinProps): React.ReactElement;
export default LanSmogThin;
