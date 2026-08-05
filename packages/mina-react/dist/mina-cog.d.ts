import React from 'react';

export interface MinaCogProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCog(props: MinaCogProps): React.ReactElement;
export default MinaCog;
