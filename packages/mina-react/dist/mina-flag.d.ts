import React from 'react';

export interface MinaFlagProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFlag(props: MinaFlagProps): React.ReactElement;
export default MinaFlag;
