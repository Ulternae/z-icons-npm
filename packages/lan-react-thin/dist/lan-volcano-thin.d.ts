import React from 'react';

export interface LanVolcanoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVolcanoThin(props: LanVolcanoThinProps): React.ReactElement;
export default LanVolcanoThin;
