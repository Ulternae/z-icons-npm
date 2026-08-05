import React from 'react';

export interface LanTeethThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTeethThin(props: LanTeethThinProps): React.ReactElement;
export default LanTeethThin;
