import React from 'react';

export interface LanBookQuranProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookQuran(props: LanBookQuranProps): React.ReactElement;
export default LanBookQuran;
