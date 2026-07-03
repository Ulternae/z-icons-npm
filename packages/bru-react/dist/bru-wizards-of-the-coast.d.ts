import React from 'react';

export interface BruWizardsOfTheCoastProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruWizardsOfTheCoast(props: BruWizardsOfTheCoastProps): React.ReactElement;
export default BruWizardsOfTheCoast;
