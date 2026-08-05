import React from 'react';

export interface MinaFineTuneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFineTune(props: MinaFineTuneProps): React.ReactElement;
export default MinaFineTune;
