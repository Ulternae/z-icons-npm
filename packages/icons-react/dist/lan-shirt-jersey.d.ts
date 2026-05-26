import React from 'react';

export interface LanShirtJerseyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShirtJersey: React.FC<LanShirtJerseyProps>;
export default LanShirtJersey;
