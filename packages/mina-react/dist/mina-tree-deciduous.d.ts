import React from 'react';

export interface MinaTreeDeciduousProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTreeDeciduous(props: MinaTreeDeciduousProps): React.ReactElement;
export default MinaTreeDeciduous;
