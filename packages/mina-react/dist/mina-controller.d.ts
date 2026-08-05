import React from 'react';

export interface MinaControllerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaController(props: MinaControllerProps): React.ReactElement;
export default MinaController;
