import React from 'react';

export interface MinaTabletProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTablet(props: MinaTabletProps): React.ReactElement;
export default MinaTablet;
