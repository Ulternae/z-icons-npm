import React from 'react';

export interface LanDiseaseRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiseaseRegular(props: LanDiseaseRegularProps): React.ReactElement;
export default LanDiseaseRegular;
