import React from 'react';

export interface LanFileCadProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileCad(props: LanFileCadProps): React.ReactElement;
export default LanFileCad;
