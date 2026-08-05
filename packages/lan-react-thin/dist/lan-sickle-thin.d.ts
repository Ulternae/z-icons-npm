import React from 'react';

export interface LanSickleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSickleThin(props: LanSickleThinProps): React.ReactElement;
export default LanSickleThin;
