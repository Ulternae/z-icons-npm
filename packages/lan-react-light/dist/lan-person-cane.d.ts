import React from 'react';

export interface LanPersonCaneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonCane(props: LanPersonCaneProps): React.ReactElement;
export default LanPersonCane;
