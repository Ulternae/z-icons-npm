import React from 'react';

export interface LanToolboxThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanToolboxThin(props: LanToolboxThinProps): React.ReactElement;
export default LanToolboxThin;
