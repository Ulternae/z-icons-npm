import React from 'react';

export interface LanUmbrellaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUmbrellaThin(props: LanUmbrellaThinProps): React.ReactElement;
export default LanUmbrellaThin;
