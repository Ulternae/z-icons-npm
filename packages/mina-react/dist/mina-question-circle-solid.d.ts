import React from 'react';

export interface MinaQuestionCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaQuestionCircleSolid(props: MinaQuestionCircleSolidProps): React.ReactElement;
export default MinaQuestionCircleSolid;
