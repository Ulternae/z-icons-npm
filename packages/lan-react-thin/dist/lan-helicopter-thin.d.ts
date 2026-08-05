import React from 'react';

export interface LanHelicopterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHelicopterThin(props: LanHelicopterThinProps): React.ReactElement;
export default LanHelicopterThin;
