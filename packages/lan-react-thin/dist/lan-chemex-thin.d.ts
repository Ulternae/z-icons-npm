import React from 'react';

export interface LanChemexThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChemexThin(props: LanChemexThinProps): React.ReactElement;
export default LanChemexThin;
