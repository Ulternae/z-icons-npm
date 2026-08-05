import React from 'react';

export interface LanPersonDressFairyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonDressFairy(props: LanPersonDressFairyProps): React.ReactElement;
export default LanPersonDressFairy;
