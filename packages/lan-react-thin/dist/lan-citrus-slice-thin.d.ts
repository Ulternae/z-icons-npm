import React from 'react';

export interface LanCitrusSliceThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCitrusSliceThin(props: LanCitrusSliceThinProps): React.ReactElement;
export default LanCitrusSliceThin;
