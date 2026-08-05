import React from 'react';

export interface LanMonumentSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMonumentSolid(props: LanMonumentSolidProps): React.ReactElement;
export default LanMonumentSolid;
