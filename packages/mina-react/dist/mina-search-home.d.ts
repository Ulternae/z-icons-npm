import React from 'react';

export interface MinaSearchHomeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSearchHome(props: MinaSearchHomeProps): React.ReactElement;
export default MinaSearchHome;
