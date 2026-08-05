import React from 'react';

export interface LanPersonFairyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonFairyThin(props: LanPersonFairyThinProps): React.ReactElement;
export default LanPersonFairyThin;
