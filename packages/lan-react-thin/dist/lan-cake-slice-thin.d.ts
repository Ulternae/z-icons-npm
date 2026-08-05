import React from 'react';

export interface LanCakeSliceThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCakeSliceThin(props: LanCakeSliceThinProps): React.ReactElement;
export default LanCakeSliceThin;
