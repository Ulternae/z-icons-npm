import React from 'react';

export interface LanShirtJerseyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShirtJersey(props: LanShirtJerseyProps): React.ReactElement;
export default LanShirtJersey;
