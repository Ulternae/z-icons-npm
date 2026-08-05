import React from 'react';

export interface NeoAngleUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoAngleUp(props: NeoAngleUpProps): React.ReactElement;
export default NeoAngleUp;
