import React from 'react';

export interface LanSpadeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSpade(props: LanSpadeProps): React.ReactElement;
export default LanSpade;
