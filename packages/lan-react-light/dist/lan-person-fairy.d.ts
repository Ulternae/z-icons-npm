import React from 'react';

export interface LanPersonFairyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonFairy(props: LanPersonFairyProps): React.ReactElement;
export default LanPersonFairy;
