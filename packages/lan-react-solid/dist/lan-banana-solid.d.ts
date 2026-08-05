import React from 'react';

export interface LanBananaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBananaSolid(props: LanBananaSolidProps): React.ReactElement;
export default LanBananaSolid;
