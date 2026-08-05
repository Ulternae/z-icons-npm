import React from 'react';

export interface LanCruzeiroSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCruzeiroSignThin(props: LanCruzeiroSignThinProps): React.ReactElement;
export default LanCruzeiroSignThin;
