import React from 'react';

export interface LanGarageCarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGarageCarThin(props: LanGarageCarThinProps): React.ReactElement;
export default LanGarageCarThin;
