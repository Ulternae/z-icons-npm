import React from 'react';

export interface NeoFlagProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoFlag(props: NeoFlagProps): React.ReactElement;
export default NeoFlag;
