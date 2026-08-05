import React from 'react';

export interface MinaDislikeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDislike(props: MinaDislikeProps): React.ReactElement;
export default MinaDislike;
