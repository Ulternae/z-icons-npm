import React from 'react';

export interface NeoLightbulbProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoLightbulb(props: NeoLightbulbProps): React.ReactElement;
export default NeoLightbulb;
