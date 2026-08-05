import React from 'react';

export interface LanSquareLariThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareLariThin(props: LanSquareLariThinProps): React.ReactElement;
export default LanSquareLariThin;
