import React from 'react';

export interface LanFacePerseveringProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFacePersevering: React.FC<LanFacePerseveringProps>;
export default LanFacePersevering;
