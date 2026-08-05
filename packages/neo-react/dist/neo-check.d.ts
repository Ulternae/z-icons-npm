import React from 'react';

export interface NeoCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCheck(props: NeoCheckProps): React.ReactElement;
export default NeoCheck;
