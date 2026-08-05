import React from 'react';

export interface LanFacePerseveringProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFacePersevering(props: LanFacePerseveringProps): React.ReactElement;
export default LanFacePersevering;
