import React from 'react';

export interface LanTentCircusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTentCircus(props: LanTentCircusProps): React.ReactElement;
export default LanTentCircus;
