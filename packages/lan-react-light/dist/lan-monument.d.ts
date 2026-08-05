import React from 'react';

export interface LanMonumentProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMonument(props: LanMonumentProps): React.ReactElement;
export default LanMonument;
