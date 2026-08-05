import React from 'react';

export interface LanDiseaseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDisease(props: LanDiseaseProps): React.ReactElement;
export default LanDisease;
