import React from 'react';

export interface CoreDropletProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreDroplet(props: CoreDropletProps): React.ReactElement;
export default CoreDroplet;
